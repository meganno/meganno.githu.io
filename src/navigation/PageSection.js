import { Button, ButtonGroup } from "@blueprintjs/core";
export default function () {
    const scrollIntoViewWithOffset = (selector) => {
        document.querySelector(".page-scroll-area").scrollTo({
            behavior: "smooth",
            top:
                document.querySelector(selector).offsetTop -
                40 -
                65 -
                (window.innerWidth < 1200 ? 65 : 0),
        });
    };
    return (
        <ButtonGroup minimal fill>
            <Button
                style={{ fontWeight: "bold" }}
                text="About"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-about-title");
                }}
            />
            <Button
                style={{ fontWeight: "bold" }}
                text="Instruction"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-instruction-title");
                }}
            />
            <Button
                style={{ fontWeight: "bold" }}
                text="Request Form"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-request-form-title");
                }}
            />
        </ButtonGroup>
    );
}
