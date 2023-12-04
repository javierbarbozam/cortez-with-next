import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { contentTab } from "../foundations/contentTab";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const content = definePartsStyle({
  tablist: {
    gap: 5,
    justifyContent: 'center'
  },
  tab: contentTab
});

const variants = {
  content: content,
};

export const tabsVariants = defineMultiStyleConfig({ variants });
