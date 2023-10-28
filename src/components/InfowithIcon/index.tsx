import { IconContainer, InfoWithIconContainer } from "./styles";
import { BenefitItemProps } from "./types";

export function InfoWithIcon({ icon, text, iconBg }: BenefitItemProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
}