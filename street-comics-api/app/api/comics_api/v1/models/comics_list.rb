module ComicsApi
  module V1
    module Models
      class ComicsList

        attr_reader(:items)

        def initialize(params)
          @items = params.fetch(:items)
        end
      end

    end
  end
end
