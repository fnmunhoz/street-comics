module ComicsApi
  module V1
    module Models
      class ComicsItem

        attr_reader(:id)
        attr_reader(:title)

        def initialize(params)
          @id = params.fetch(:id)
          @title = params.fetch(:title)
        end
      end

    end
  end
end
