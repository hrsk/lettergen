import Plus from "@/assets/icons/svg/Plus.svg?react";
import { Card, Header, PolymorphButton } from "@/shared/ui";
import { Link } from "react-router-dom";
import s from "./dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div className={s.mainPageWrapper}>
      <Header>
        <h1>Applications</h1>
        <PolymorphButton
          as={Link}
          to={"/generation"}
          variant={"primary"}
          className={s.appHeaderButton}
        >
          <Plus />
          {"Create New"}
        </PolymorphButton>
      </Header>
      <div className={s.letters}>
        {cards?.map((card) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              text={card.text}
            />
          );
        })}
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    title: "Dear Stripe team,",
    text: `I am a highly skilled product designer with a passion for creating
        intuitive, user-centered designs. I have a strong background in design
        systems and am excited about the opportunity to join the Stripe
        product design team and work on building out the design system for the
        platform. I am particularly drawn to Stripes mission of making it easy
        for businesses to sell online and am confident that my experience in
        creating user-friendly designs will be an asset to the team. I have
        experience in conducting user research, creating wireframes, and
        prototyping interactive designs, as well as working closely with
        engineers to ensure that my designs are implemented correctly. I am a
        strong collaborator and have experience working in cross-functional
        teams to bring new products and features to market. Im confident that
        I can help improve Stripe user experience and make it even more
        accessible to businesses. I would love the opportunity to speak with
        you further about my qualifications and how I can contribute to the
        Stripe team. Thank you for considering my application.`,
  },
  {
    id: 2,
    title: "Dear Stripe team,",
    text: `I am a highly skilled product designer with a passion for creating
        intuitive, user-centered designs. I have a strong background in design
        systems and am excited about the opportunity to join the Stripe
        product design team and work on building out the design system for the
        platform. I am particularly drawn to Stripes mission of making it easy
        for businesses to sell online and am confident that my experience in
        creating user-friendly designs will be an asset to the team. I have
        experience in conducting user research, creating wireframes, and
        prototyping interactive designs, as well as working closely with
        engineers to ensure that my designs are implemented correctly. I am a
        strong collaborator and have experience working in cross-functional
        teams to bring new products and features to market. Im confident that
        I can help improve Stripe user experience and make it even more
        accessible to businesses. I would love the opportunity to speak with
        you further about my qualifications and how I can contribute to the
        Stripe team. Thank you for considering my application.`,
  },
  {
    id: 3,
    title: "Dear Stripe team,",
    text: `I am a highly skilled product designer with a passion for creating
        intuitive, user-centered designs. I have a strong background in design
        systems and am excited about the opportunity to join the Stripe
        product design team and work on building out the design system for the
        platform. I am particularly drawn to Stripes mission of making it easy
        for businesses to sell online and am confident that my experience in
        creating user-friendly designs will be an asset to the team. I have
        experience in conducting user research, creating wireframes, and
        prototyping interactive designs, as well as working closely with
        engineers to ensure that my designs are implemented correctly. I am a
        strong collaborator and have experience working in cross-functional
        teams to bring new products and features to market. Im confident that
        I can help improve Stripe user experience and make it even more
        accessible to businesses. I would love the opportunity to speak with
        you further about my qualifications and how I can contribute to the
        Stripe team. Thank you for considering my application.`,
  },
  {
    id: 4,
    title: "Dear Stripe team,",
    text: `I am a highly skilled product designer with a passion for creating
        intuitive, user-centered designs. I have a strong background in design
        systems and am excited about the opportunity to join the Stripe
        product design team and work on building out the design system for the
        platform. I am particularly drawn to Stripes mission of making it easy
        for businesses to sell online and am confident that my experience in
        creating user-friendly designs will be an asset to the team. I have
        experience in conducting user research, creating wireframes, and
        prototyping interactive designs, as well as working closely with
        engineers to ensure that my designs are implemented correctly. I am a
        strong collaborator and have experience working in cross-functional
        teams to bring new products and features to market. Im confident that
        I can help improve Stripe user experience and make it even more
        accessible to businesses. I would love the opportunity to speak with
        you further about my qualifications and how I can contribute to the
        Stripe team. Thank you for considering my application.`,
  },
  {
    id: 5,
    title: "Dear Stripe team,",
    text: `I am a highly skilled product designer with a passion for creating
        intuitive, user-centered designs. I have a strong background in design
        systems and am excited about the opportunity to join the Stripe
        product design team and work on building out the design system for the
        platform. I am particularly drawn to Stripes mission of making it easy
        for businesses to sell online and am confident that my experience in
        creating user-friendly designs will be an asset to the team. I have
        experience in conducting user research, creating wireframes, and
        prototyping interactive designs, as well as working closely with
        engineers to ensure that my designs are implemented correctly. I am a
        strong collaborator and have experience working in cross-functional
        teams to bring new products and features to market. Im confident that
        I can help improve Stripe user experience and make it even more
        accessible to businesses. I would love the opportunity to speak with
        you further about my qualifications and how I can contribute to the
        Stripe team. Thank you for considering my application.`,
  },
  {
    id: 6,
    title: "Dear Stripe team,",
    text: `I am a highly skilled product designer with a passion for creating
        intuitive, user-centered designs. I have a strong background in design
        systems and am excited about the opportunity to join the Stripe
        product design team and work on building out the design system for the
        platform. I am particularly drawn to Stripes mission of making it easy
        for businesses to sell online and am confident that my experience in
        creating user-friendly designs will be an asset to the team. I have
        experience in conducting user research, creating wireframes, and
        prototyping interactive designs, as well as working closely with
        engineers to ensure that my designs are implemented correctly. I am a
        strong collaborator and have experience working in cross-functional
        teams to bring new products and features to market. Im confident that
        I can help improve Stripe user experience and make it even more
        accessible to businesses. I would love the opportunity to speak with
        you further about my qualifications and how I can contribute to the
        Stripe team. Thank you for considering my application.`,
  },
];
