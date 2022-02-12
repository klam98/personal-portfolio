import React from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AchievementsStyles";
import { achievementsData } from "../../constants/constants";

const Achievements = () => (
    <Section>
        <SectionTitle>Achievements</SectionTitle>
        <Boxes>
            {achievementsData.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{card.number}+</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Achievements;
