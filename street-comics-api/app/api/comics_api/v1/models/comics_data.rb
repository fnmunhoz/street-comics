module ComicsApi
  module V1
    module Models
      class ComicsData

        attr_reader(:data)

        def initialize(params)
          @data = params.fetch(:data)
        end
      end

    end
  end
end
