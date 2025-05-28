import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Box, Button, Flex } from '@mantine/core';

export default function Header() {
  return (
    <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <Box w="100%" py={5} bg="indigo" px={20}>
        <Flex justify="space-between" align="center">
          <Flex gap={10}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6, ease: 'linear', delay: 0.7 },
              }}
            >
              <Link to="/">
                <Button color="white" variant="outline" w={80}>
                  Посты
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6, ease: 'linear', delay: 0.9 },
              }}
            >
              <Link to="/">
                <Button color="white" variant="outline" w={80}>
                  Два
                </Button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6, ease: 'linear', delay: 1.1 },
              }}
            >
              <Link to="/">
                <Button color="white" variant="outline" w={80}>
                  Три
                </Button>
              </Link>
            </motion.div>
          </Flex>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.6, ease: 'linear', delay: 0.7 },
            }}
          >
            <Link to="/register">
              <Button color="white" variant="outline">
                Регистрация
              </Button>
            </Link>
          </motion.div>
        </Flex>
      </Box>
    </motion.div>
  );
}
