import { Button, ButtonGroup } from "@blueprintjs/core";
import {
    faChalkboardUser,
    faFilePen,
    faInfoCircle,
} from "@fortawesome/pro-duotone-svg-icons";
import { useEffect, useState } from "react";
import { faIcon } from "../icon";
export default function () {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const scrollIntoViewWithOffset = (selector) => {
        document.querySelector(".page-scroll-area").scrollTo({
            behavior: "smooth",
            top:
                document.querySelector(selector).offsetTop -
                40 -
                65 -
                (window.innerWidth < 992 ? 65 : 0),
        });
    };
    return (
        <ButtonGroup minimal fill>
            <Button
                icon={faIcon({ icon: faInfoCircle })}
                text="About"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-about-title");
                }}
            />
            <Button
                icon={faIcon({ icon: faChalkboardUser })}
                text="Instruction"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-instruction-title");
                }}
            />
            <Button
                icon={faIcon({ icon: faFilePen })}
                text={`${width < 400 ? "" : " Request "}Form`}
                onClick={() => {
                    scrollIntoViewWithOffset("#page-request-form-title");
                }}
            />
        </ButtonGroup>
    );
}
