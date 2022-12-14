import { IconCheck, IconX } from "@tabler/icons";
import { Lock } from "tabler-icons-react";
import {
  Notification,
  Box,
  Center,
  Input,
  Title,
  Text,
  Textarea,
  Alert,
  Button,
  Anchor,
  TextInput,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";

import React, { useState } from "react";
import { getEnvironmentURL, phoneWidth, tabletWidth } from "../helpers";
import { useForm } from "@mantine/form";
import PinInput from "react-pin-input";
import Head from "next/head";
import HomePage from "../components/Layout/home";
import Landing from "../components/Layout";

const IndexPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [personalUrl, setPersonalUrl] = useState("");
  return <Landing />;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Center sx={{ flexDirection: "column", width: "100%", height: "75vh" }}>
        {showSearch ? (
          <Box
            sx={{
              [phoneWidth]: { width: "80%" },
              [tabletWidth]: { width: "80%" },
              width: "30%",
            }}
          >
            <Center sx={{ gap: 5 }}>
              <TextInput
                placeholder="e.g. johndoe123"
                onChange={(e) => {
                  setPersonalUrl(e.currentTarget.value);
                }}
                autoCapitalize="off"
                autoComplete="off"
                // autoFocus

                autoCorrect="off"
                spellCheck="false"
                description="This is the username you set when you first created your note"
                label="Your username"
              />
              {personalUrl && (
                <Anchor
                  mt="auto"
                  href={`${getEnvironmentURL()}/${personalUrl}`}
                >
                  <Button>Go</Button>
                </Anchor>
              )}
            </Center>
            {/* <Anchor href={`${getEnvironmentURL()}/${personalUrl}`}>
              {getEnvironmentURL().replace("https://www.", "")}/{personalUrl}
            </Anchor> */}
          </Box>
        ) : (
          <>
            <Title
              sx={{
                [tabletWidth]: { fontSize: "30px" },
                [phoneWidth]: { fontSize: "24px" },
              }}
            >
              What would you like to do?
            </Title>
            <Center
              sx={{
                gap: 10,
                [phoneWidth]: { marginTop: "2.5%" },
                [tabletWidth]: { marginTop: "3%" },
              }}
              mt="1%"
            >
              <Button onClick={() => setShowSearch(true)}>Check my note</Button>
              <a href="/create">
                <Button color="green">Create a new note</Button>
              </a>
            </Center>
          </>
        )}
      </Center>
    </>
  );
  // const form = useForm({
  //   initialValues: {
  //     path: "",
  //     body: "",
  //     pin: "",
  //   },
  // });

  // const [finalPath, setFinalPath] = useState("");

  // const [hasSubmitted, sethasSubmitted] = useState(false);

  // const [isLoading, setIsLoading] = useState(false);

  // return (
  //   <>
  //     <Head>
  //       <title>Uh oh</title>
  //     </Head>
  //     <Center sx={{ flexDirection: "column" }}>
  //       <Box mt={10} sx={{ width: "40%" }}>
  //         <Title sx={{ textAlign: "center" }}>
  //           Oh no...I forgot my friend's number!
  //         </Title>
  //         <Text color="dimmed" size="sm" sx={{ textAlign: "center" }}>
  //           Save some of your most urgent contacts/info in a url that you'll
  //           easily remember
  //         </Text>
  //         <form
  //           onSubmit={form.onSubmit(async (values) => {
  //             setIsLoading(true);
  //             if (values.pin.length !== 4) {
  //               setIsLoading(false);
  //               return showNotification({
  //                 color: "red",
  //                 disallowClose: true,
  //                 message: "Please enter a 4 number pin",
  //               });
  //             }

  //             const sendData = await fetch(`/api/saveData`, {
  //               method: "POST",
  //               body: JSON.stringify(values),
  //             });
  //             const response = await sendData.json();
  //             if (response.error) {
  //               setIsLoading(false);
  //               return showNotification({
  //                 color: "red",
  //                 disallowClose: true,
  //                 message: response.error,
  //               });
  //             }

  //             setIsLoading(false);
  //             sethasSubmitted(true);
  //             setFinalPath(values.path);
  //             return showNotification({
  //               color: "green",
  //               disallowClose: true,
  //               message: "Successfully created path!",
  //             });
  //           })}
  //         >
  //           {/* <Input.Wrapper mt={10} id="firstName" label="First name" required>
  //           <Input
  //             required
  //             id="firstName"
  //             placeholder="e.g. John"
  //             {...form.getInputProps("firstName")}
  //           />
  //         </Input.Wrapper>
  //         <Input.Wrapper
  //           description="In case you forget your pin, we'll email you a reset link."
  //           mt={10}
  //           id="email-backup"
  //           label="Email (optional)"
  //         >
  //           <Input
  //             required
  //             id="email-backup"
  //             placeholder="johndoe@gmail.com"
  //             {...form.getInputProps("email")}
  //           />
  //         </Input.Wrapper> */}

  //           <Input.Wrapper
  //             description="Something you'll remember (we recommend your full name)"
  //             mt={5}
  //             id="path"
  //             label="URL"
  //             required
  //           >
  //             <Input
  //               required
  //               id="path"
  //               placeholder="e.g. johndoe123"
  //               {...form.getInputProps("path")}
  //             />
  //           </Input.Wrapper>
  //           {form.values.path.includes(" ") && (
  //             <Text mt={3} size="xs" color="red">
  //               Cannot have a space in your url
  //             </Text>
  //           )}
  //           <Alert mt={10} color="green">
  //             <Text weight={700} size="md">
  //               Your current url:{" "}
  //               <span style={{ fontWeight: 700 }}>
  //                 {/* {finalPath || `${getEnvironmentURL()}/${form.values.path}`} */}
  //                 {getEnvironmentURL()}/{form.values.path}
  //               </span>
  //             </Text>
  //           </Alert>
  //           <Textarea
  //             autosize
  //             {...form.getInputProps("body")}
  //             mt={20}
  //             placeholder="John Doe: 415-XXX-XXXX"
  //             description={
  //               <Center sx={{ justifyContent: "flex-start", gap: 1 }}>
  //                 <Lock size={14} strokeWidth={2.5} />
  //                 <Text color="dimmed" sx={{ alignItems: "center" }}>
  //                   Anything you save here will be fully encrypted.
  //                 </Text>
  //               </Center>
  //             }
  //             label="Literally anything you want"
  //             required
  //           />
  //           <Input.Wrapper mt={10} id="pin" label="Pin" required>
  //             <PinInput
  //               id="pin"
  //               length={4}
  //               initialValue=""
  //               // secret
  //               {...form.getInputProps("pin")}
  //               type="numeric"
  //               inputMode="number"
  //               inputStyle={{ borderColor: "black" }}
  //               inputFocusStyle={{ borderColor: "blue" }}
  //               autoSelect={true}
  //               regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
  //             />
  //           </Input.Wrapper>
  //           <Center sx={{ justifyContent: "flex-end" }}>
  //             <Button
  //               disabled={form.values.path.includes(" ")}
  //               loading={isLoading}
  //               type="submit"
  //               mt={10}
  //               ml="auto"
  //             >
  //               Save
  //             </Button>
  //           </Center>
  //         </form>
  //         {hasSubmitted && (
  //           <Notification
  //             mt={10}
  //             icon={<IconCheck size={18} />}
  //             color="teal"
  //             disallowClose
  //             title="You have created a new path"
  //           >
  //             Here's your url:{" "}
  //             <Anchor href={`${getEnvironmentURL()}/${finalPath}`}>
  //               {getEnvironmentURL()}/{finalPath}
  //             </Anchor>
  //           </Notification>
  //         )}
  //       </Box>
  //     </Center>
  //   </>
  // );
};

export default IndexPage;
