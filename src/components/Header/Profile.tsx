import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData= true} : ProfileProps) {
    return (
        <Flex
        align="center"
        >
        {showProfileData && (
            <Box mr="4" textAlign="right">
            <Text>Lucas Pereira</Text>
            <Text color="gray.300" fontSize="small">
                lucasgamesdark@gmail.com
            </Text>
        </Box>
        )}

        <Avatar size="md" name="Lucas Pereira" src="https://github.com/luc4sdev.png"/>
        </Flex>
    )
}