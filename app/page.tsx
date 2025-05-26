import Image from "next/image";
import PageLayout from "../components/page_layout";
import { faXTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ivalin Chobanov | About",
  description: "Page about Ivalin Chobanov",
};

export default function Home() {
  return (
    <PageLayout>
      <div className="columns is-flex-direction-row-reverse">
        <div className="column is-one-third has-text-centered">
          <div className="mb-2">
            <Image className="profile-photo" src={"/photos/profile_photo.jpeg"} alt="Profile photo" width={256} height={256}></Image>
          </div>
          <div className="is-flex is-align-items-center is-justify-content-center is-gap-1">
            <span className="is-size-4"><FontAwesomeIcon icon={faEnvelope} /></span>  chobanov [at] ivalin [dot] com
          </div>
        </div>
        <div className="column is-two-thirds">
          <div className="content">
            <h1 className="title is-3">Ivalin Chobanov</h1>
            <p className="subtitle is-5">PhD student @ University of Edinburgh</p>
            <p className="mb-1">
              I am a first year PhD student at the University of Edinburgh, member of the <a href="https://rad.inf.ed.ac.uk/">Robust Autonomy and Decisions Group</a> and the <a href="https://agents-lab.org/">Autonomous Agents Research Group</a>.
              I am broadly interested in Reinforcement Learning and Multi-Agent Reinforcement Learning. Topics of interests include:
            </p>
            <ul className="mt-0 mb-1">
              <li>Mechanisms for stimulating specific behavior in agents</li>
              <li>Open-ended learning, especially learning in the abscence of a specific goal</li>
              <li>Ad-hoc teamwork and agent modelling</li>
              <li>Learning task abstractions</li>
            </ul>
            <p>
              I have previously received a Master&apos;s degree in Artificial Intelligence from the University of Edinburgh and a
              Bachelor&apos;s degree in Mathematics with Computer Science from the University of Southampton. I have also worked as
              a Software Engineer at StoneX Financial Ltd. where I was part of the Metal&apos;s front-office team.
            </p>
            <div className="level mt-5 mb-5 is-mobile is-size-3">
              <div className="level-item">
                <a className="link-no-decoration" href="https://x.com/IvalinChobanov"><FontAwesomeIcon className="custom-icon" icon={faXTwitter} /></a>
              </div>
              <div className="level-item">
                <a className="link-no-decoration" href="https://www.linkedin.com/in/ivalin-chobanov/"><FontAwesomeIcon className="custom-icon" icon={faLinkedin} /></a>
              </div>
              <div className="level-item">
                <a className="link-no-decoration" href="https://github.com/ivalin-chobanov"><FontAwesomeIcon className="custom-icon" icon={faGithub} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
