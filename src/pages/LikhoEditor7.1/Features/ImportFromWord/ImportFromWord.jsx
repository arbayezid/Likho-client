import React from 'react';
import WordBanner from './WordBanner';
import BattleTest from './BattleTest/BattleTest';
import DocList from './DocList/DocList';

const ImportFromWord = () => {
    return (
        <div>
           <WordBanner></WordBanner>
           <BattleTest></BattleTest>
           <DocList></DocList>
        </div>
    );
};

export default ImportFromWord;