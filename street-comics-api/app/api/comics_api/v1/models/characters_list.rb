module ComicsApi
  module V1
    module Models
      class CharactersList

        attr_reader(:items)

        def initialize(params)
          @items = params.fetch(:items)
        end
      end

    end
  end
end
