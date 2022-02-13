import React from "react";

import { Section, SectionDivider, SectionTitle, SectionText } from "../../styles/GlobalComponents";
import { RowContainer, Img, RowInfo, HeaderThree, JobInfo, ItalicsInfo } from "./EmploymentStyles";
import { employmentData } from "../../constants/constants";

function Employment() {
    return (
        <Section id="employment">
            <SectionDivider />
            <br />
            <SectionTitle>Employment</SectionTitle>
            <SectionText style={{ paddingBottom: "1.8rem" }}>
                Past and present companies in technical roles.
            </SectionText>

            {employmentData.map(
                ({ id, company, jobTitle, dateStart, dateEnd, description, image }) => (
                    <RowContainer key={id}>
                        <Img src={image} />
                        <RowInfo>
                            <HeaderThree title>{company}</HeaderThree>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <ItalicsInfo style={{ paddingRight: "1.5rem" }}>
                                    {jobTitle}
                                </ItalicsInfo>
                                <ItalicsInfo style={{ paddingLeft: "1.5rem" }}>
                                    {dateStart} — {dateEnd}
                                </ItalicsInfo>
                            </div>
                            <JobInfo>{description}</JobInfo>
                        </RowInfo>
                    </RowContainer>
                )
            )}
        </Section>
    );
}

export default Employment;
