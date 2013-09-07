require "i18n"

module Jekyll

  class CategoryPage < Page

    def initialize(site, base, category)
      @site = site
      @base = base
      @dir = I18n.transliterate(category).gsub(/\s/, '-').downcase
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category_index.html')
      self.data['index'] = category
      @site.config['articles'].each do |name, categories|
        categories.each do |cat|
          if cat.downcase == category
            self.data['title'] = cat
            break
          end
        end
      end
    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category_index'
        p site.categories
        site.categories.keys.each do |category|
          site.pages << CategoryPage.new(site, site.source, category)
        end
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
