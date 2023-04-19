import styled from "styled-components";
import { COLORS } from "../../styles/Constants";

export const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 0 3% 3% 3%;
  border-radius: 10px;
`;

export const ContentWrapper = styled.div`
  padding-top: 1.3em;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 1px solid ${COLORS.gray};
  border-right: 1px solid ${COLORS.gray};
  border-bottom: 1px solid ${COLORS.gray};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 18px;
  font-weight: 400;
`;

export const IconWrapper = styled.div`
  color: ${COLORS.white};
  display: flex;
  justify-content: space-between;
  width: 13%;
  max-width: 100px;
  min-width: 80px;
  padding-right: 3%;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  border-radius: 10px 10px 0 0;
  background: ${COLORS.primary};
  height: 4em;
  display: flex;
  align-items: center;
  padding-left: 1.5em;
  border: 1px solid ${COLORS.transparentGray15};
  justify-content: space-between;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3% 3% 3%;
  color: ${COLORS.gray};
  font-weight: bold;
  font-size: 18px;
`;

export const TextWrapper = styled.div`
  margin: 0 3% 3% 3%;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.gray};
  border-radius: 10px;
  margin: 0 3% 3% 3%;
  padding: 0 3% 0 3%;
`;

export const WhiteText = styled.h2`
  color: ${COLORS.white};
  font-size: 22px;
`;

export const TextBox = styled.div`
  width: 87%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const NameBox = styled.div`
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
