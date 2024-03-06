import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { faPaperPlane } from "@fortawesome/pro-duotone-svg-icons";
import { isMobile } from "react-device-detect";
import { faIcon } from "../icon";
export default function Eacl() {
    return (
        <div style={{ marginTop: isMobile ? 30 : 40 }}>
            <FormGroup label="Email" style={{ maxWidth: 300 }}>
                <InputGroup large type="email" />
            </FormGroup>
            <FormGroup label="Invitation code" style={{ maxWidth: 300 }}>
                <InputGroup large type="text" />
            </FormGroup>
            <Button
                large
                icon={faIcon({ icon: faPaperPlane })}
                intent={Intent.SUCCESS}
                text="Get access"
            />
        </div>
    );
}
