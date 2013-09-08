module Jekyll
  class PostCount < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @category = text
    end

    def render(context)
      if @category and not @category.empty?
        context.registers[:site].categories[@category.downcase].size
      else
        context.registers[:site].posts.size
      end
    end
  end

end

Liquid::Template.register_tag('post_count', Jekyll::PostCount)
