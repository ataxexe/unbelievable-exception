require 'i18n'

module Jekyll

  class CategoryPage < Page

    def initialize(site, base, category)
      @site = site
      @base = base
      @dir = I18n.transliterate(category).gsub(/\s/, '-').downcase
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category-index.html')
      self.data['index'] = category
    end
  end

  class CategoryFeed < Page

    def initialize(site, base, category)
      @site = site
      @base = base
      @dir = I18n.transliterate(category).gsub(/\s/, '-').downcase
      @name = 'feed.xml'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category-feed.xml')
      self.data['index'] = category
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      site.categories.keys.each do |category|
        site.pages << CategoryPage.new(site, site.source, category)
        site.pages << CategoryFeed.new(site, site.source, category)
      end
    end
  end

  module CategoryFilter

    # build the url for a given category
    def category_url(category)
      I18n.transliterate(category).gsub(/\s/, '-').downcase
    end

    # Gets the number of posts in the given category
    def post_count(category)
      @context.registers[:site].categories[category.downcase].size
    end

  end
  
end

Liquid::Template.register_filter(Jekyll::CategoryFilter)
