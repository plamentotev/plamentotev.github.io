// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import CodeBlock from '@theme-original/CodeBlock';
import Tabs from '@theme-original/Tabs';
import TabItem from '@theme-original/TabItem';

import CodeSnippet from '@site/src/components/CodeSnippet';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Add the frequently used components as globals so there is no need to import them in MDX files
  CodeBlock, Tabs, TabItem, CodeSnippet
};
