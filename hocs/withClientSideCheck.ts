import { isClientSide } from "../utils";

type NullFunction = () => null;

export const withClientSideCheck = <T>(component: T): T | NullFunction => {
  if (!isClientSide) {
    return () => null;
  }
  return component;
}
