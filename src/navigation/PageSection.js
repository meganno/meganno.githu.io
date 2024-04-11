import { Button, ButtonGroup, Classes } from "@blueprintjs/core";
import { scrollIntoViewWithOffset } from "../constant";
export default function () {
    return (
        <ButtonGroup minimal fill className="page-section-anchors">
            <Button
                className={Classes.ACTIVE}
                id="page-about-title-button"
                style={{ fontWeight: "bold" }}
                text="About"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-about-title");
                }}
            />
            <Button
                id="page-request-form-title-button"
                style={{ fontWeight: "bold" }}
                text="Request Form"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-request-form-title");
                }}
            />
            <Button
                id="page-instruction-title-button"
                style={{ fontWeight: "bold" }}
                text="Instruction"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-instruction-title");
                }}
            />
        </ButtonGroup>
    );
}
