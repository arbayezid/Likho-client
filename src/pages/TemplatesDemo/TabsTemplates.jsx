import { useParams } from "react-router-dom";
import useTemplates from "../../hooks/useTemplates";
import FilterEdit from "../shared/FilterEdit/FilterEdit";
import Loader from "../shared/Loader/Loader";


const TabsTemplates = () => {
    const { id } = useParams();
    const [templates] = useTemplates();

    // Find the specific college details based on the id
    const templatesDetails = templates.find((template) => template._id === id);

    return (
        <div>

{
                templatesDetails ? (
                    <FilterEdit
                        templateInfo={templatesDetails}
                    />
                ) : (
                    <p><Loader /></p>
                )
            }

        </div>
    );
};

export default TabsTemplates;