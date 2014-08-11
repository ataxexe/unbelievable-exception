module Jekyll

  class PlayStoreLink < Liquid::Tag

    def initialize(tag_name, name, tokens)
      @package_name = name.strip
    end

    def render(context)
      "https://play.google.com/store/apps/details?id=#{@package_name}"
    end

  end

end

Liquid::Template.register_tag('play_store', Jekyll::PlayStoreLink)
