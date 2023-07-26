import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  ActionIcon,
  GearIcon,
} from "@mantine/core";
import "./Nav.css";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";

import "./Nav.css";

import logo from "../../Images/logo.png";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.black : theme.white,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCoin,
    title: "مجانية للجميع",
    description: "تعلم حرفة او طور نفسك بما يساعدك لبيع منتجاتك ومجانا",
  },
  {
    icon: IconBook,
    title: "مواد تعليمية",
    description: "مصادر مدروسة بعناية لتعطيك الدفعة الابتدائية للتعلم",
  },
  {
    icon: IconChartPie3,
    title: "زيادة في المبيعات",
    description: "نساعدك في وضع خطككا لتسويقية والمالية لترويج افضل لمنتجك",
  },
  {
    icon: IconNotification,
    title: "إشعارات",
    description: "تبقى على علم بكل الورشات ومواعديها واماكن انعقادها",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box
      pb={80}
      style={{
        background:
          "linear-gradient(to right, rgba(164, 212, 155, 1), rgba(117, 200, 182, 1))#f7e8b9",
        marginTop: "-60px",
      }}
    >
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <img
            style={{ width: "12em", height: "auto" }}
            src={logo}
            alt="logo-image"
          />
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a href="#" className={classes.link}>
              تسوق
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      ورشات عمل
                    </Box>
                    <IconChevronDown
                      style={{ stroke: "white" }}
                      size={16}
                      color={theme.fn.primaryColor()}
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>ورشات عمل</Text>
                  <Anchor href="src\Components\Events\Events.jsx" fz="xs">
                    اظهر الكل
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <a
              href="src\Components\Home\Aboutus\Aboutus.jsx#"
              className={classes.link}
            >
              من نحن
            </a>
            <a
              href="src\Components\Contactus\Contactus.jsx"
              className={classes.link}
            >
              تواصل معنا
            </a>
          </Group>
          <Group spacing={30} position="right" noWrap className="icons">
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ color: "rgba(255, 225, 106, 1)" }}
              size="1.05rem"
              stroke={1.5}
            ></i>
            <i
              class="fa-solid fa-cart-shopping"
              style={{ color: "rgba(255, 225, 106, 1)" }}
              size="1.05rem"
              stroke={1.5}
            ></i>
            <i
              class="fa-regular fa-user"
              style={{ color: "rgba(255, 225, 106, 1)" }}
              size="1.05rem"
              stroke={1.5}
            ></i>
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title=" القائمة "
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="#" className={classes.link} style={{ color: "black" }}>
            تسوق
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5} style={{ color: "black" }}>
                ورشات
              </Box>
              <IconChevronDown
                size={16}
                color={theme.fn.primaryColor()}
                style={{ stroke: "black" }}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link} style={{ color: "black" }}>
            من نحن
          </a>
          <a href="#" className={classes.link} style={{ color: "black" }}>
            تواصل معنا
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">تسجيل الدخول</Button>
            <Button style={{ background: "rgba(164, 212, 155, 1)" }}>
              التسجيل
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
