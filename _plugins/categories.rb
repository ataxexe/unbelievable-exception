require "i18n"

module Jekyll

  module CategoryFilter

    CATEGORY_DIR = 'categories'

    # build the url for a given category
    def category_url(category)
      base_dir = @context.registers[:site].config['category_dir']
      base_dir = (base_dir || CATEGORY_DIR).gsub(/^\/*(.*)\/*$/, '\1')
      base_dir = I18n.transliterate(base_dir)
      category = I18n.transliterate(category).gsub(/\s/, '-').downcase
      File.join(base_dir, category)
    end

  end

end

Liquid::Template.register_filter(Jekyll::CategoryFilter)
