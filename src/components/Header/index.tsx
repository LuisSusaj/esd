import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  Label,
  Outline,
  Span,
  Large,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visibility, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visibility);
  };

  const handleMenuItemClick = () => {
    setVisibility(false);
  };

  const MenuItem = () => {
    return (
      <>
        <Large to="/" onClick={handleMenuItemClick}>
          <Span>{t("Home")}</Span>
        </Large>
        <Large to="/about" onClick={handleMenuItemClick}>
          <Span>{t("Who we are")}</Span>
        </Large>
        <Large to="/our-work" onClick={handleMenuItemClick}>
          <Span>{t("What we do")}</Span>
        </Large>
        <Large to="/faq" onClick={handleMenuItemClick}>
          <Span>{t("Faq")}</Span>
        </Large>
        <Large to="/camp" onClick={handleMenuItemClick}>
          <Span>{t("Workshop & Events")}</Span>
        </Large>
        <Large to="/shop" onClick={handleMenuItemClick}>
          <Span>{t("Shop")}</Span>
        </Large>
        <Large to="/contact" onClick={handleMenuItemClick}>
          <Span>{t("Contact")}</Span>
        </Large>
        <Large to="/donations" onClick={handleMenuItemClick}>
          <Span>{t("Donations")}</Span>
        </Large>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" style={{ height: "calc(100px - 2rem)" }}>
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.png" width="170px" height="auto" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visibility} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
