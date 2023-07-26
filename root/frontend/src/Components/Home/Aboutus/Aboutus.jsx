import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";

const mockdata = [
  {
    title: " ورشات عمل ",
    image:
      "https://www.rscn.org.jo/uploaded_files/handicrafts/63e269342b5941675782452.png",
    date: " ننظم ورشات عمل لمساعدة المجتمع المحلي على تمكين نفسه وخلق فرص جديدة",
  },
  {
    title: " نشاطات محلية تفاعلية",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Souk_Jara_4_Jul_2008_%282%29.JPG/1024px-Souk_Jara_4_Jul_2008_%282%29.JPG",
    date: " مشاركة وتنسيق فعاليات مع مختلف الشركاء في سوق الحرف الاردنية  ",
  },
  {
    title: " منتجات متنوعة",
    image:
      "https://www.independentarabia.com/sites/default/files/styles/1368x911/public/article/mainimage/2022/07/27/582736-136230117.jpg?itok=iOmkoRZe",
    date: " نوفر منصة مميزة لتسويق ثقافةالمنتج المحلي وتطويرها لتواكب السوق العالمي ",
  },
  {
    title: " فريق عمل مستعد ",
    image:
      "http://wildjordan.com/sites/default/files/styles/destination_slide/public/tea_bags16.jpg?itok=UPsEjVUQ",
    date: " كادر مميز من الخبراء في مجالات التسويق والحرف لاعطاء النصيحة للفنانين المحليين ",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `cairo, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticlesCardsGrid() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card
      key={article.title}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
