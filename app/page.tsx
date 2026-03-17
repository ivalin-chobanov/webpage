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
  applicationName: "Ivalin Chobanov Personal Website",
  description: "Home page for the personal website of Ivalin Chobanov",
  keywords: ["Ivalin Chobanov", "Reinforcement Learning", "Artificial Intelligence", "PhD Student", "University of Edinburgh"],
  creator: "Ivalin Chobanov"
};

export default function Home() {
  return (
    <PageLayout>
      <div className="columns is-flex-direction-row-reverse is-desktop">
        <div className={`column is-one-third-desktop is-flex-tablet-only is-block-desktop is-gap-2 ${styles.imagecol}`}>
          <div className="mb-2 has-text-centered-mobile">
            <Image className="profile-photo" src={"/photos/profile_photo.jpeg"} alt="Profile photo" width={256} height={256}></Image>
          </div>
          <div className="is-flex is-flex-direction-column is-hidden-mobile">
            <p className="title is-3 is-hidden-desktop">Ivalin Chobanov</p>
            <p className="subtitle is-5 is-hidden-desktop">Second Year PhD student @ University of Edinburgh</p>
            <div className="is-flex is-flex-direction-column  nowrap is-size-6">
              <ImageItem icon={faEnvelope}>i.chobanov [at] ed.ac.uk</ImageItem>
              <ImageItem icon={faEnvelope}>chobanov [at] ivalin [dot] com</ImageItem>
              <ImageItem icon={faLocationDot}>Edinburgh, United Kingdom</ImageItem>
            </div>
          </div>
        </div>
        <div className="column is-two-thirds-dektop">
          <div className="content has-text-justified">
            <h1 className="title is-3 is-hidden-tablet-only">Ivalin Chobanov</h1>
            <div className="subtitle is-5 is-hidden-tablet-only">Second Year PhD student @ University of Edinburgh
              <div className="is-flex is-flex-direction-column is-align-items-left is-hidden-tablet">
                <div className="is-flex is-flex-direction-column is-align-items-start nowrap is-size-6">
                  <ImageItem icon={faEnvelope}>i.chobanov [at] ed.ac.uk</ImageItem>
                  <ImageItem icon={faEnvelope}>chobanov [at] ivalin [dot] com</ImageItem>
                </div>
              </div>
            </div>
            <p className="mb-1">
              My research is in the area of reinforcement learning, with a focus on designing agents that can learn skills without extrinsic rewards that can generalize to open-ended environments.
              Particularly, I am interested in designing and utilizing latent world models and geometric constraints in order to ground the skill learning proceess in the dynamics, physics and physical properties of the environment,
              while respecting the properties of the desired skills. My further interests include instrinsic motivation, representation learning, generatve modelling and multi-agent systems.
            </p>
            <p className="mb-1">
              I am a member of the <a href="https://assistive-autonomy.ed.ac.uk/">Centre for AI in Assistive Autonomy</a> and <a href="https://edinburgh-rl.github.io">MARBLE</a>,
              supervised by <a href="https://assistive-autonomy.ed.ac.uk/project/subramanian-ramamoorthy/">Subramanian Ramamoorthy</a> and <a href="https://ignaciocarlucho.github.io/">Ignacio Carlucho</a>.
            </p>
            <p>
              Before starting my PhD, I received a Master&apos;s degree in Artificial Intelligence from the University of Edinburgh and a
              Bachelor&apos;s degree in Mathematics with Computer Science from the University of Southampton. I have previously worked as
              a Software Developer at StoneX Financial Ltd. as part of the Metal&apos;s front-office team.
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
            <div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout >
  );
}
