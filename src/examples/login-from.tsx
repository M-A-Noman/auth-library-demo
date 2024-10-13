import { Box, Button, Input, Stack, Text } from "@/components";

export const LoginForm = () => {
  return (
    <>
      <Box className="px-8 py-12 border border-gray-300 rounded-xl">
        <Stack>
          <Text
            as="h2"
            weight={"bold"}
            align={"center"}
            size={"3xl"}
            className="mb-2"
          >
            Login
          </Text>
          <Text as="span" emphasis={"low"} align={"center"} className="mb-8">
            Please Enter your credential for login
          </Text>
          <Text
            as="label"
            htmlFor="username"
            size={"sm"}
            weight={"medium"}
            className="mb-1.5"
          >
            Username
          </Text>
          <Input
            type="text"
            id="username"
            placeholder="Username"
            className="mb-4"
          />
          <Text
            as="label"
            htmlFor="password"
            size={"sm"}
            weight={"medium"}
            className="mb-1.5"
          >
            Password
          </Text>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="mb-4"
          />

          <Button type="submit" variant={"solid"} className="mb-10">
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
};
