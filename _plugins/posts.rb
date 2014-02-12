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

  class PostIdGenerator < Generator
    safe true

    def generate(site)
      ids = {}
      site.posts.each do |post|
        post_id = post.data['id']
        ids[post_id] = post.url if post_id
      end
      site.config['ids'] = ids
    end

  end

  class PostLink < Liquid::Tag

    def initialize(tag_name, id, tokens)
      @post_id = id.strip
    end

    def render(context)
      site = context.registers[:site]
      site.config['ids'][@post_id]
    end

  end

end

Liquid::Template.register_tag('post_count', Jekyll::PostCount)
Liquid::Template.register_tag('link_to_post', Jekyll::PostLink)
