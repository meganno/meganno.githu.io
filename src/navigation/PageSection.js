import { Button, ButtonGroup } from "@blueprintjs/core";
import { scrollIntoViewWithOffset } from "../constant";
export default function () {
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
                text="Request Form"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-request-form-title");
                }}
            />
            <Button
                style={{ fontWeight: "bold" }}
                text="Instruction"
                onClick={() => {
                    scrollIntoViewWithOffset("#page-instruction-title");
                }}
            />
        </ButtonGroup>
    );
}
