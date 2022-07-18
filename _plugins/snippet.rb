module Jekyll
  # Works like IncludeTag but instead of including the whole file,
  # includes only the content between "%start_snippet%" and "%end_snippet%".
  # All leading whitespace characters are trimmed. This is quite useful when
  # importing code as the indentation of the first line is stripped.
  class IncludeSnippetTag < Jekyll::Tags::IncludeTag
    def read_file(file, context)
      file_lines = super.lines
      start_tag_line = file_lines.index { |line| line.include? "%start_snippet%" }
      end_tag_line = file_lines.index { |line| line.include? "%end_snippet%" }
      return "" if start_tag_line.nil? or end_tag_line.nil?

      start_line = start_tag_line + 1
      end_line = end_tag_line - 1
      return "" if end_line <= start_line

      snippet_lines = file_lines[start_line..end_line]
      leading_whitespace_chars = snippet_lines[0][/^\s*/]
      unless leading_whitespace_chars.nil?
        snippet_lines.each { |line| line.delete_prefix!(leading_whitespace_chars) }
      end

      return snippet_lines.join
    end
  end
end
  
Liquid::Template.register_tag('include_snippet', Jekyll::IncludeSnippetTag)
