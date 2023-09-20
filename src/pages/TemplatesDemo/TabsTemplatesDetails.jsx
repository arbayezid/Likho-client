import React from 'react';
import FilterEdit from '../shared/FilterEdit/FilterEdit';

const TabsTemplatesDetails = ({ template }) => {

    const { company, street, city, number, pro_name, date, overview, goals_1, goals_2, specifications, milestones, resources, glossary_of_terms } = template;


    return (
        <div>

            <FilterEdit />

            <h2>{company}</h2>

        </div>
    );
};

export default TabsTemplatesDetails;