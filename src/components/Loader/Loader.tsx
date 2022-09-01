import { SpinnerContainer } from './Loader.styled';
import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <SpinnerContainer>
      <Bars color="#254e58" height="50" width="50" />
    </SpinnerContainer>
  );
};
