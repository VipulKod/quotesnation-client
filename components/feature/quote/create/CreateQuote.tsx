import { Button } from "@/components/ui/button/Button";
import { Input } from "@/components/ui/input/Input";
import Modal from "@/components/ui/modal/Modal";
import { TextArea } from "@/components/ui/textarea/Textarea";
import React, { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import axios from "axios";
import { SuccessNotification } from "@/components/ui/success_notif/SuccessNotification";

const CreateQuote = () => {
  const maxCharCount = 200;
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isAuthor, setIsAuthor] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    initState();
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const initState = () => {
    setQuote("");
    setAuthor("");
    setIsAuthor(false);
    setCharacterCount(0);
  };

  // useEffect(() => {
  //   console.log(showSuccess);
  //   if (showSuccess) {
  //     setShowSuccess(false);
  //   }
  // }, [showSuccess]);

  const handleQuoteChange = (event) => {
    if (showSuccess) {
      setShowSuccess(false);
    }
    const value = event.target.value;
    if (value.length <= maxCharCount) {
      setQuote(value);
      setCharacterCount(value.length);
    }
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleIsAuthorChange = (event) => {
    setIsAuthor(event.target.checked);
  };

  const postQuote = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      let response = await axios.post(`${process.env.API_URL}/quotes`, {
        quote,
        author: isAuthor ? localStorage.get("username") : author,
      });

      if (response.data) {
        setQuote("");
        setAuthor("");
        setCharacterCount(0);
        setIsAuthor(false);
        toggleModal();
        setIsLoading(false);
        setShowSuccess(true);
      }
    } catch (error) {}
  };
  return (
    <>
      {showSuccess && (
        <SuccessNotification successMessage={"Quote Saved Successfully"} />
      )}

      <Modal isOpen={isModalOpen} title={"Add Quote"}>
        <form onSubmit={postQuote}>
          <div className="container mx-auto my-4">
            <TextArea
              label="Enter your quote here"
              name="myTextarea"
              value={quote}
              onChange={handleQuoteChange}
              rows={4}
              placeholder="Type here..."
            />
            <p className="text-xs font-light text-slate-500">
              {characterCount}/{140} characters
            </p>
          </div>

          <div className="flex">
            <div className="block min-h-6 flex">
              <label>
                <input
                  id="isAuthorCheck"
                  className=""
                  type="checkbox"
                  checked={isAuthor}
                  onChange={handleIsAuthorChange}
                />
              </label>
              <p className="px-4">Are you the author of this quote?</p>
            </div>
          </div>
          {!isAuthor ? (
            <>
              <Input
                label="Author"
                type="text"
                placeholder="Enter author name"
                value={author}
                icon={null}
                onChange={handleAuthorChange}
              />
            </>
          ) : (
            <></>
          )}
          <Button
            onClick={postQuote}
            className="px-2 my-2"
            disabled={quote.length > 0 && author.length > 0}
          >
            <AiOutlineLogin /> <p className="px-1">Post</p>
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default CreateQuote;
