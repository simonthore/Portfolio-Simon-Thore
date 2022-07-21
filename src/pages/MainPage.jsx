import simon from "../assets/simon.jpg";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div>
      <div className="cadre">
        <div className="childImg">
          <img
            className=" cursor-pointer border-solid border-2 border-black md:ml-32 md:mt-24 md:w-96 ml-12 mt-24 "
            src={simon}
            height="519px"
            alt="photosDeMoi"
          />
        </div>
        <div className="childText">
          <h2 className="presentation">
            Hello my name is Simon THORE, i'm a junior developer.
          </h2>

          <p className="subtitle">
            {" "}
            I am a former receptionnist were i used to work in luxury hotel. My
            previous work teach me on how to behave with costumer even if they
            are angry or disapointed and I think that now i've a pretty good
            costumer relationship management.
          </p>
        </div>
      </div>
      <div className="stacks">
          <h1>Skills and Technologies</h1>
          </div>
          
    </div>
  );
}
