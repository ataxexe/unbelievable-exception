module Jekyll

  class LinkTag < Liquid::Tag

    def self.sites
      {
        :play_store => 'https://play.google.com/store/apps/details?id=#{@name}',
        :xposed_module => 'http://repo.xposed.info/module/#{@name}',
        :xda_thread => 'http://forum.xda-developers.com/showthread.php?t=#{@name}',
        :f_droid => 'https://f-droid.org/repository/browse/?fdid=#{@name}',
        :google => 'http://lmgtfy.com/?q=#{@name}'
      }
    end

    def initialize(tag_name, name, tokens)
      @name = name.strip
      @link = eval("\"#{LinkTag.sites[tag_name.to_sym]}\"")
    end

    def render(context)
      @link
    end

  end

end

Jekyll::LinkTag::sites.each do |key, url|
  Liquid::Template.register_tag(key, Jekyll::LinkTag)
end
