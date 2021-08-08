module ComicsApi
  module V1
    module Models
      class CharactersData

        attr_reader(:data)

        def initialize(params)
          @data = params.fetch(:data)
        end
      end

    end
  end
end
