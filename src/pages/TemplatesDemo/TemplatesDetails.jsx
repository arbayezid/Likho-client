import { useParams } from "react-router-dom";
import useTemplates from "../../hooks/useTemplates";
import TemplatesDetailsInfo from "./TemplatesDetailsInfo";
import Loader from "../shared/Loader/Loader";


const TemplatesDetails = () => {
    const { id } = useParams();
    const [templates] = useTemplates();

    // Find the specific college details based on the id
    const templatesDetails = templates.find((template) => template._id === id);

    return (
        <div>

            {
                templatesDetails ? (
                    <TemplatesDetailsInfo
                        templateInfo={templatesDetails}
                    />
                ) : (
                    <p><Loader /></p>
                )
            }

        </div>
    );
};

export default TemplatesDetails;