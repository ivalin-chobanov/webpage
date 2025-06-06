import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLinkItem({ icon, href }: { icon: IconDefinition, href: string }) {
    return (
        <a className="link-no-decoration" href={href}><FontAwesomeIcon className="custom-icon" icon={icon} /></a>
    );
}