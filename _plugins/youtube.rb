module Jekyll

  class YoutubeFilter < Liquid::Tag
    # build the url for a given category
    def initialize(tag_name, link, tokens)
      @link = link.strip
    end

    def render(context)
<<-HTML
<div class="video-container">
<iframe width="480" height="320" src="//www.youtube.com/embed/#{@link}"
  frameborder="0"
  allowfullscreen>
</iframe>
</div>
HTML
    end

  end
  
end

Liquid::Template.register_tag("youtube", Jekyll::YoutubeFilter)
