module ComicsApi
  module V1
    module Models
      class CharactersItem

        attr_reader(:id)
        attr_reader(:name)

        def initialize(params)
          @id = params.fetch(:id)
          @name = params.fetch(:name)
        end
      end

    end
  end
end
