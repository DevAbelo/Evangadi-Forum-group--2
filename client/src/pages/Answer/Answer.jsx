import { useRef, useEffect, useState } from "react";
import classes from "./answer.module.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LayOut from "../../Components/Layout/LayOut";
import { FaCircleArrowRight } from "react-icons/fa6";
import axios from "../../axios/axiosConfig";

function Answer() {
  // const answerDom = useRef();
  // const [questionData, setQuestionData] = useState({ title: "", text: "" });
  // const [loading, setLoading] = useState(true);
  // const [username, setUsername] = useState("");
  // const [answers, setAnswers] = useState([]); // State for answers

  // useEffect(() => {
  //   const fetchQuestionAndAnswers = async () => {
  //     try {
  //       const response = await axios.get("/questions"); // Fetch question
  //       const { title, text, username, answer } = response.data; // Assuming your API returns answers
  //       setQuestionData({ title, text });
  //       setUsername(username); // Set the username
  //       setAnswers(answers || []); // Set answers if available
  //     } catch (error) {
  //       console.error("Failed to fetch data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchQuestionAndAnswers();
  // }, []);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const answer = answerDom.current.value.trim();
  //   try {
  //     await axios.post("/answer/answer", { answer });
  //     alert("Answer submitted");
  //     answerDom.current.value = "";
  //   } catch (error) {
  //     alert("Failed to submit the answer. Please try again.");
  //     console.error(error);
  //   }
  // }

  return (
    <LayOut>
      <section className={classes.answer_container}>
        <div className={classes.title}>
          <h1>Question</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className={classes.question_box}>
              <span>
                <FaCircleArrowRight
                  style={{ fontSize: "20px", margin: "35px", color: "blue" }}
                />
              </span>

              <div className={classes.real_question}>
                <span>
                  <h4>{questionData.title || "No title available"}</h4>
                  <hr />
                </span>
                <p>{questionData.text || "No text available"}</p>
              </div>
            </div>
          )}
        </div>

        <div className={classes.answer_p}>
          <hr />
          <p>Answer From The Community</p>
          <hr />

          <div className={classes.answer_p}>
            <hr />
            <p>Answer From The Community</p>
            <hr />

            {answers.length > 0 ? (
              answers.map((answer, index) => (
                <div key={index} className={classes.previous_question}>
                  <div className={classes.answer_icon}>
                    <span>
                      <AccountCircleIcon style={{ fontSize: "30px" }} />
                    </span>
                    <span>{answer.username || "Anonymous"}</span>
                    <hr />
                  </div>
                  <div>
                    <p>{answer.text}</p>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <div className={classes.no_answers}>
                <div className={classes.answer_icon}>
                  <AccountCircleIcon style={{ fontSize: "30px" }} />
                  <span>Anonymous</span>
                </div>
                <p>No answers available.</p>
              </div>
            )}
          </div>

          <div className={classes.answer_text}>
            <form onSubmit={handleSubmit}>
              <p>Answer The Top Question</p>
              <div className={classes.link}>
                <Link to="/question">Go To Question Page</Link>
              </div>
              <textarea
                ref={answerDom}
                placeholder="Write your answer..."
                required
              />
              <button type="submit">Post Answer</button>
            </form>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Answer;
