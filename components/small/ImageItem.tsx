import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ImageItem({children, icon}: {children: React.ReactNode, icon: IconDefinition}) {
    return (
        <div className="is-flex is-align-items-center is-gap-1">
            <span className="is-size-4"><FontAwesomeIcon icon={icon} /></span>{children}
        </div>
    );
}