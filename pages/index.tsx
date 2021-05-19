import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppbarMain from '../src/components/AppbarMain';
import About from '../src/components/About';
import TitleAndDescriptionSEO from '../src/components/reusable/TitleAndDescriptionSEO';

export default function Home() {
  const desktopLayout = useMediaQuery('(min-width:960px)'); //md break point

  return (
    <>
      <TitleAndDescriptionSEO
        title="Luzia Chaves | Psicóloga"
        description="Website oficial da Luzia Chaves"
      />
      <AppbarMain />
      <Container fixed>
        <About desktopLayout={desktopLayout} />
      </Container>
    </>
  );
}
