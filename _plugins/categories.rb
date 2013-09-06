require "i18n"

module Jekyll

  module CategoryFilter

    # build the url for a given category
    def category_url(category)
      I18n.transliterate(category).gsub(/\s/, '-').downcase
    end

  end

end

Liquid::Template.register_filter(Jekyll::CategoryFilter)
