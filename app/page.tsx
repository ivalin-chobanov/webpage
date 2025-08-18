import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { faXTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next";
import styles from "./page.module.scss"
import ImageItem from "@/components/small/ImageItem";
import IconLinkItem from "@/lib/IconLinkItem";

export const metadata: Metadata = {
  title: "About | Ivalin Chobanov",
  description: "Page about Ivalin Chobanov",
};

export default function Home() {
  return (
    <PageLayout>
      <div className="columns is-flex-direction-row-reverse is-desktop">
        <div className={`column is-one-third-desktop has-text-centered ${styles.imagecol}`}>
          <div className="mb-2">
            <Image className="profile-photo" src={"/photos/profile_photo.jpeg"} alt="Profile photo" width={256} height={256}></Image>
          </div>
          <div className="is-flex is-flex-direction-column is-align-items-center ">
            <div className="is-flex is-flex-direction-column is-align-items-start nowrap">
              <ImageItem icon={faEnvelope}>chobanov [at] ivalin [dot] com</ImageItem>
              <ImageItem icon={faEnvelope}>I.L.Chobanov [at] sms.ed.ac.uk</ImageItem>
              <ImageItem icon={faLocationDot}>Edinburgh, United Kingdom</ImageItem>
            </div>
          </div>
        </div>
        <div className="column is-two-thirds-dektop">
          <div className="content">
            <h1 className="title is-3">Ivalin Chobanov</h1>
            <p className="subtitle is-5">PhD student @ University of Edinburgh</p>
            <p className="mb-1">
              I am a first year PhD student at the University of Edinburgh, member of the <a href="https://assistive-autonomy.ed.ac.uk/">Centre for AI in Assistive Autonomy</a> and <a href="https://edinburgh-rl.github.io">MARBLE</a> (formerly known as <a href="https://agents-lab.org/">Autonomous Agents Research Group</a>).
              I am supervised by <a href="https://assistive-autonomy.ed.ac.uk/project/subramanian-ramamoorthy/">Subramanian Ramamoorthy</a>, <a href="https://zhaobn.github.io/">Bonan Zhao</a> and <a href="https://ignaciocarlucho.github.io/">Ignacio Carlucho</a>.
              My research focuses on Multi-Agent Reinforcement Learning with the goal of developing methods that enable agents to exhibit complex behavior. In particular, I am interested in:
            </p>
            <ul className="mt-0 mb-1">
              <li>Cooperation under sparse reward setting</li>
              <li>Learning task and environment abstractions to enhance learning and cooperation</li>
              <li>Using multi-agent world models</li>
              <li>Reward-free learning and goal recognition</li>
              <li>Ad-hoc teamwork and agent modelling</li>
            </ul>
            <p>
              I am also broadly interested in the continual learning setting, designing models with long-term memory, out-of-distribution detection, zero(few)-shot learning.
              Outside of RL/MARL, I am interested in Generative AI, Robotics and World Models.
            </p>
            <p>
              Before starting my PhD, I received a Master&apos;s degree in Artificial Intelligence from the University of Edinburgh and a
              Bachelor&apos;s degree in Mathematics with Computer Science from the University of Southampton. I have also worked as
              a Software Developer at StoneX Financial Ltd. where I was part of the Metal&apos;s front-office team.
            </p>
            <div className="level mt-5 mb-5 is-mobile is-size-3">
              <div className="level-item">
                <IconLinkItem icon={faXTwitter} href="https://x.com/IvalinChobanov" />
              </div>
              <div className="level-item">
                <IconLinkItem icon={faLinkedin} href="https://www.linkedin.com/in/ivalin-chobanov" />
              </div>
              <div className="level-item">
                <IconLinkItem icon={faGithub} href="https://github.com/ivalin-chobanov" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout >
  );
}
