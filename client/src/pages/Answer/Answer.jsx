import React, { useState, useEffect } from "react";
import classes from "../Answer/answer.module.css";
import { IoIosContact } from "react-icons/io";
import instance from "../../Api/axios";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

function Answer() {
  const { questionid } = useParams();
  const [answer, setAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [username, setUsername] = useState("");
  const [question, setQuestion] = useState({ title: "", description: "" });
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await instance.get(`/question/${questionid}`, {
          headers: {
            authorization: "Bearer " + token,
          },
        }); // Passing the question_id "dynamically"
        console.log(response.data);
        setQuestion({
          title: response.data.question.title,
          description: response.data.question.description,
        });
      } catch (error) {
        console.error("Error fetching question:", error);
        setErrorMessage("Failed to load question.");
      }
    };

    const fetchAnswers = async () => {
      try {
        const response = await instance.get(`/${questionid}`, {
          headers: {
            authorization: "Bearer " + token,
          },
        }); // Fetching answers based on question ID!
        console.log(response.data);
        setAnswers(response.data.answer);
      } catch (error) {
        console.error("Error fetching answers:", error);
        setErrorMessage("Failed to load answers.");
      }
    };

    // fetchUser();
    fetchQuestion();
    fetchAnswers(); // Fetching the answers
  }, []);

  const postAnswer = async (e) => {
    e.preventDefault();
    if (!answer) {
      setErrorMessage("Please provide an answer.");
      return;
    }

    try {
      const response = await instance.post(
        `/answer/${questionid}`,
        {
          answer,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);

      if (response.status === 201) {
        setSuccessMessage("Answer posted successfully");
        setAnswer(""); // Here i'm Clearing the textarea after success
        //here i am refetching the answers after posting a new one, so this  call right after posting a new answer.. i am tryinh to ensure the data is up-to-date.
        fetchAnswers();
      } else if (response.status === 400) {
        setErrorMessage("Please provide an answer.");
      } else {
        setErrorMessage("An unexpected error occurred.");
      }
    } catch (error) {
      console.error("Error posting answer:", error.response);
      setErrorMessage("Something went wrong. Try again later.");
    }
  };

  return (
    <>
    <Loader/>
      <main>
        <section className={classes.question_section}>
          <h2>Question</h2>
          {/*Now here i am trying to Render fetched question title and description since it is dynamic */}
          <h3>{question.title}</h3>
          <p className={classes.link_work}>{question.description}</p>
          <br />
          <hr />
        </section>

        <section className={classes.answer_section}>
          <h2>Answer From The Community</h2>
          <hr />
          {answers.length > 0 ? (
            answers.map((answer, index) => (
              <div className={classes.answer} key={index}>
                <IoIosContact size={200} />

                <div className={classes.margin}>
                  <p>{answer.answer}</p> {/* 👈👈Displaying each answer */}
                </div>
              </div>
            ))
          ) : (
            <p>No answers yet. Be the first to answer!😇</p>
          )}
          {/* Displaying The fetched username... */}
          <p className={classes.username}>{username}</p>
        </section>

        <section className={classes.answer_form}>
          <h2>Answer The Top Question</h2>
          <textarea
            placeholder="Your Answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <button
            type="submit"
            className={classes.submit_btn}
            onClick={postAnswer}
          >
            Post Your Answer
          </button>

          {/* displaying error❌ or success messages👍 */}
          {errorMessage && <p className={classes.error}>{errorMessage}</p>}
          {successMessage && (
            <p className={classes.success}>{successMessage}</p>
          )}
        </section>
      </main>
    </>
  );
}

export default Answer;
