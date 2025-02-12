import { onboardingStructureType } from "@/types/onboardingStructureType";
import { images } from "./images";

const onboardingData: onboardingStructureType[] = [
  {
    image: images.onboarding1,
    title: "Transactions Sécurisées",
    desc: "Vos transactions sont protégées par un système de sécurité avancé.",
    active: 0,
    navigateTo: 'second-page'
  },
  {
    image: images.onboarding2,
    title: "Transparence Totale",
    desc: "Suivez vos opérations financières en temps réel avec des détails clairs.",
    active: 1,
    navigateTo: 'third-page'
  },
  {
    image: images.onboarding3,
    title: "Application Simple et Intuitive",
    desc: "Profitez d'une navigation fluide grâce à un design clair et facile à utiliser.",
    active: 2,
    navigateTo: '/(auth)/register'
  },
];

export { onboardingData };
